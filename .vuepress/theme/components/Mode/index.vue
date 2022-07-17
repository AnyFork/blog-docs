<template>
  <div class="color-picker" v-if="$themeConfig.modePicker !== false">
    <img :src="require('../../../public/svg/light.svg')" alt="light" @click="themeClick('dark')" v-if="currentMode === 'light'" />
    <img :src="require('../../../public/svg/dark.svg')" alt="dark" @click="themeClick('light')" v-else />
  </div>
</template>

<script>
import applyMode from './applyMode'
export default {
  name: 'UserSettings',
  data() {
    return {
      currentMode: 'light'
    }
  },
  // 为了在保证 modePicker 在 SSR 中正确开关，并实现管理，Mode 组件将负责 modePicker 关闭的情况
  mounted() {
    // modePicker 关闭时默认使用主题设置的模式
    const themeMode = this.$themeConfig.mode || 'auto'
    const { modePicker } = this.$themeConfig
    if (modePicker === false) {
      // 为 'auto' 模式设置监听器
      if (themeMode === 'auto') {
        window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
          applyMode(themeMode)
        })
        window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
          applyMode(themeMode)
        })
      }
      applyMode(themeMode)
    }
    this.init()
  },

  methods: {
    themeClick(themeMode) {
      if (themeMode !== this.currentMode) {
        this.currentMode = themeMode
        applyMode(themeMode)
        localStorage.setItem('mode', themeMode)
      }
    },
    init() {
      //modePicker开启时默认使用用户主动设置的模式
      this.currentMode = localStorage.getItem('mode') || this.$themeConfig.mode || 'auto'
      // Dark and Light autoswitches
      // 为了避免在 server-side 被执行，故在 Vue 组件中设置监听器
      var that = this
      window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
        that.$data.currentMode === 'auto' && applyMode(that.$data.currentMode)
      })
      window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
        that.$data.currentMode === 'auto' && applyMode(that.$data.currentMode)
      })
      applyMode(this.currentMode)
    }
  }
}
</script>

<style lang="stylus">
.color-picker {
	position: relative;
	margin-right: 1em;
  cursor pointer;
  img {
    width: 30px;
    margin-top: 3px;
  }
	.color-button {
		align-items: center;
		height: 100%;
		.iconfont {
			font-size 1.4rem
			color: $accentColor
		}
	}

	.color-picker-menu {
		position: absolute;
		top: 40px;
		left: 50%;
		z-index: 150;

		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
	}
}

@media (max-width: $MQMobile) {
	.color-picker {
		margin-right: 1rem;
		.color-picker-menu {
			left: calc(50% - 35px);
			&::before {
				left: calc(50% + 35px);
			}
		}
	}
}
</style>
