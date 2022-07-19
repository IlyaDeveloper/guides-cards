import {AboutMeComponent} from "./components/about-me";

const app = () => {
  const about = new AboutMeComponent();

  about.init();
}

window.addEventListener('DOMContentLoaded', () => {
  app()
  console.log('Loaded Page');
});
