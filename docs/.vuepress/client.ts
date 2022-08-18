import { defineClientConfig } from "@vuepress/client";
import Icon from './theme/components/common/Icon.vue'
import Category from './theme/components/layouts/Category.vue'
import Tags from './theme/components/layouts/Tags.vue'
import Item from './theme/components/common/Item.vue'
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("Icon", Icon)
    app.component("Item", Item)
    router.addRoute({ name: "category", path: "/category", component: Category })
    router.addRoute({ name: "tags", path: "/tags", component: Tags })
  },
  setup() { },
  rootComponents: [],
});
