import { defineClientConfig } from "@vuepress/client";
import Category from './theme/components/layouts/Category.vue'
import Tags from './theme/components/layouts/Tags.vue'
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    router.addRoute({ name: "category", path: "/category", component: Category })
    router.addRoute({ name: "tags", path: "/tags", component: Tags })
  },
  setup() { },
  rootComponents: [],
});
