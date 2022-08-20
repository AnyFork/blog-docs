<template>
  <div id="algolia-search-input" class="search-box"></div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { useInstance } from '@theme/helpers/composable'
export default defineComponent({
  props: ['options'],
  setup(props, ctx) {
    const initialize = (userOptions) => {
      const { algoliaOptions = {} } = userOptions
      docsearch(
        Object.assign({}, userOptions, {
          container: '#algolia-search-input',
          algoliaOptions: algoliaOptions
        })
      )
    }
    onMounted(() => {
      initialize(props.options)
    })
  }
})
</script>

<style>
.search-box .DocSearch.DocSearch-Button {
  cursor: text;
  height: 2rem;
  color: #5b5b5b;
  border: 1px solid var(--border-color);
  border-radius: 2rem;
  font-size: 0.9rem;
  padding: 0 0.5rem 0 0rem;
  outline: none;
  transition: all 0.2s ease;
  background: transparent;
  background-size: 1rem;
  margin: 0px;
}

.search-box .DocSearch-Button-Container {
  margin-left: 0.4rem;
}

.search-box .DocSearch-Button .DocSearch-Search-Icon {
  width: 15px;
  height: 15px;
  position: relative;
  top: 0.1rem;
}

.search-box .DocSearch-Button-Placeholder {
  font-size: 0.8rem;
}

.search-box .DocSearch-Button-Keys {
  display: flex;
  right: 0.1rem;
}

.search-box .DocSearch-Button-Key {
  font-size: 12px;
  line-height: 15px;
  width:15px;
  height:15px;
}
</style>
