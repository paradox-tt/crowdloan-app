<template>
  <div id="stake-dot" class="max-w-full mx-auto gradient">
    <div class="background-left">
      <div class="background-right pt-20 pb-20">
        <div class="max-w-2xl mx-auto pl-4 pr-4">
          <Title> Stake DOT </Title>
          <p class="mb-12">
            <img
              src="@/assets/img/info.svg"
              class="w-4 h-4 align-middle inline"
            />
            Note: Proxy accounts and multi signatures are not able to receive
            rewards
          </p>
          <div class="form-container p-12">
            <form class="p-4">
              <Input
                v-model="data.polkadotAddress"
                label="Polkadot Address"
                type="text"
                required
                :validationMessage="data.errors['polkadotAddress']"
              />
              <Input
                v-model="data.availableAmount"
                label="Available Amount"
                innerLabel="DOT"
                type="number"
                placeholder="0"
                disabled
                required
              />
              <Input
                v-model="data.stakingAmount"
                label="Staking Amount"
                innerLabel="DOT"
                type="number"
                min="0"
                placeholder="0"
                required
                :validationMessage="data.errors['stakingAmount']"
              />
              <Input
                v-model="data.referralAddress"
                label="Referral Address (optional)"
                type="text"
              />
              <Input
                v-model="data.estimatedAmount"
                label="Estimated Amount"
                innerLabel="ASTA"
                type="number"
                placeholder="0"
                disabled
                required
              />
              <Input
                v-model="data.emailAddress"
                label="Email Address (optional)"
                type="text"
                placeholder="youremail@example.com"
                :validationMessage="data.errors['emailAddress']"
              />
              <Button>Stake Now</Button>
            </form>
            {{ data }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, watch } from 'vue';
import Input from './shared/Input.vue';
import Button from './shared/Button.vue';
import Title from './shared/Title.vue';
import { StakeFormData } from '../data/StakeFormData';
import { isValidAddressPolkadotAddress, getAccount } from '../polkadot';
import { ApiPromise } from '@polkadot/api';

export default defineComponent({
  components: { Input, Button, Title },
  setup() {
    const data = reactive<StakeFormData>(new StakeFormData());
    const api = inject('api') as ApiPromise;

    watch(
      () => data.emailAddress,
      () => {
        validateEmail(data.emailAddress ?? '');
      }
    );

    watch(
      () => data.polkadotAddress,
      async () => {
        if (validatePolkadotAddress(data.polkadotAddress)) {
          const account = await getAccount(api, data.polkadotAddress);
          data.availableAmount = account.data.free.toNumber() || 0;
        }
      }
    );

    watch(
      () => data.stakingAmount,
      () => {
        validateStakingAmount(data.stakingAmount, data.availableAmount);
      }
    );

    const validateEmail = (value: string): void => {
      const regEx =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!value || regEx.test(value)) {
        data.errors['emailAddress'] = '';
      } else {
        data.errors['emailAddress'] = 'Invalid Email Address.';
      }
    };

    const validatePolkadotAddress = (value: string): boolean => {
      if (!value) {
        data.errors['polkadotAddress'] = 'Polkadot address is required.';
        return false;
      }

      const isAddressValid = isValidAddressPolkadotAddress(value);
      if (isAddressValid) {
        data.errors['polkadotAddress'] = '';
      } else {
        data.errors['polkadotAddress'] = 'Invalid Polkadot address.';
      }

      return isAddressValid;
    };

    const validateStakingAmount = (
      stakingAmount: number,
      availableAmount: number
    ): void => {
      if (stakingAmount <= 0) {
        data.errors['stakingAmount'] =
          'Staking amount should be greater than 0.';
        return;
      }

      if (stakingAmount > availableAmount) {
        data.errors['stakingAmount'] =
          'Staking amount can not be greater than available amount.';
        return;
      }

      data.errors['stakingAmount'] = '';
    };

    return { data };
  }
});
</script>

<style scoped>
.gradient {
  background: linear-gradient(180deg, #fff 0%, #fafbfe 30%);
}

.background-left {
  background-size: 550px;
  background-repeat: no-repeat;
  background-position: 0 bottom;
  background-image: url('~@/assets/img/stake-dot-left.png');
}

.background-right {
  background-size: 300px;
  background-repeat: no-repeat;
  background-position: right top;
  background-image: url('~@/assets/img/stake-dot-right.png');
}

.form-container {
  border: solid 1px #fff;
  background: linear-gradient(180deg, #f0f5fb 0%, #fff 100%);
  border-radius: 0.15rem;
  box-shadow: -5px 5px 20px #d3c0e1, 5px -5px 20px #b7d1eb;
}

button:disabled,
button[disabled] {
  opacity: 0.5;
}
</style>
