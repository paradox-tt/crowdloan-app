<template>
  <footer>
    <div class="bg-dark">
      <div class="max-w-3xl mx-auto pt-12 pb-4">
        <nav
          class="
            lg:flex
            justify-between
            mb-6
            text-left text-footer-link
            font-light
          "
        >
          <ul class="flex flex-wrap mb-4 list-none">
            <li class="pr-6 mb-12">
              <p class="font-weight-bold mb-4">General</p>
              <ul>
                <FooterLink href="https://stake.co.jp/en/">About</FooterLink>
                <FooterLink href="https://stake.co.jp/en/contact">
                  Contact Us
                </FooterLink>
                <FooterLink href="https://angel.co/company/astar-network">
                  Careers
                </FooterLink>
                <FooterLink href="https://forum.astar.network/">
                  Team
                </FooterLink>
              </ul>
            </li>
            <li class="pr-6 mb-12">
              <p class="font-weight-bold mb-4">Repositories</p>
              <ul>
                <FooterLink href="https://github.com/PlasmNetwork/Plasm">
                  Astar
                </FooterLink>
                <FooterLink href="https://github.com/staketechnologies/apps">
                  Astar Portal Sites
                </FooterLink>
                <FooterLink href="https://lockdrop.astar.network/#/lock-form">
                  Astar Lockdrop
                </FooterLink>
                <FooterLink href="https://docs.astar.network/">
                  Astar Doumentation
                </FooterLink>
                <FooterLink href="https://github.com/PlasmNetwork/astar-lp">
                  Astar Homepage
                </FooterLink>
              </ul>
            </li>
            <li class="pr-6 mb-12">
              <p class="font-weight-bold mb-4">Community</p>
              <ul>
                <FooterLink href="https://twitter.com/AstarNetwork">
                  Twitter
                </FooterLink>
                <FooterLink href="https://discord.gg/Z3nC9U4">
                  Discord
                </FooterLink>
                <FooterLink href="https://t.me/PlasmOfficial">
                  Telegram
                </FooterLink>
                <FooterLink href="ttps://medium.com/astar-network">
                  Medium
                </FooterLink>
                <FooterLink
                  href="https://github.com/PlasmNetwork/plasmdocs/blob/master/wp/en.pdf"
                >
                  Whitepaper
                </FooterLink>
              </ul>
            </li>
            <li class="pr-6 mb-12">
              <p class="font-weight-bold mb-4">Collaboration</p>
              <ul>
                <FooterLink href="https://www.substrate.io/builders-program/"
                  >Substrate Builders Program</FooterLink
                >
                <FooterLink href="https://web3.foundation/grants/">
                  Web3 Foundation Grants Program
                </FooterLink>
                <FooterLink
                  href="https://github.com/PlasmNetwork/growth-program"
                >
                  Astar Growth Program
                </FooterLink>
              </ul>
            </li>
          </ul>
          <ul class="flex mb-12">
            <li class="footer-link">
              <a href="https://twitter.com/AstarNetwork" target="_blank">
                <svg id="icon-twitter" viewBox="0 0 512 512">
                  <title>Twitter</title>
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
                <span>Twitter</span>
              </a>
            </li>
            <li class="footer-link">
              <a href="https://discord.gg/Z3nC9U4" target="_blank">
                <svg id="icon-discord" viewBox="0 0 448 512">
                  <title>Discord</title>
                  <path
                    fill="currentColor"
                    d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"
                  ></path>
                </svg>
                <span>Discord</span>
              </a>
            </li>
            <li class="footer-link">
              <a href="https://t.me/PlasmOfficial" target="_blank">
                <svg id="icon-telegram" viewBox="0 0 448 512">
                  <title>Telegram</title>
                  <path
                    fill="currentColor"
                    d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                  ></path>
                </svg>
                <span>Telegram</span>
              </a>
            </li>
            <li class="footer-link">
              <a href="https://medium.com/astar-network" target="_blank">
                <svg id="icon-medium" viewBox="0 0 512 512">
                  <title>Medium</title>
                  <path
                    fill="currentColor"
                    d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"
                  ></path>
                </svg>
                <span>Medium</span>
              </a>
            </li>
            <li class="footer-link">
              <a href="https://github.com/PlasmNetwork/Plasm" target="_blank">
                <svg id="icon-github" viewBox="0 0 496 512">
                  <title>Github</title>
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <p class="mb-4 text-left text-xs text-footer-link">
          <img
            src="@/assets/img/brand-logo-mark.png"
            alt="Astar Network"
            class="w-8 h-8 mr-2 align-middle inline"
            loading="lazy"
          />
          © 2021 Astar Network. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterLink from './FooterLink.vue';

export default defineComponent({
  components: { FooterLink }
});
</script>

<style scoped>
.footer-link a {
  color: #e0e0e0;
  display: block;
  border-radius: 100%;
  width: 46px;
  height: 46px;
  text-align: center;
  line-height: 46px;
  position: relative;
  padding: auto;
  padding-top: 13px;
}

.footer-link a svg {
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  margin-right: auto;
}

.footer-link a:hover {
  color: #fff;
  background: linear-gradient(
    135deg,
    #1b6dc1 4.31%,
    #8b5bc5 68.67%,
    #ff5cb3 134.39%
  );
}

.footer-link a span {
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  text-align: center;
  white-space: nowrap;
  opacity: 0;
  font-size: 0.875rem;
}

.footer-link a:hover span {
  opacity: 1;
}
</style>
