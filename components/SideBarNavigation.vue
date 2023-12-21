<template>
  <section class="sticky top-16 overflow-y-auto side-bar-scroll">
    <ul>
      <li
        v-for="([groupName, groupedContent]) in contentGroups"
        :key="groupName"
      >
        <ul class="mb-3">
          <p class="uppercase cursor-default mb-1">{{ groupName }}</p>

          <li
            v-for="contentItem in groupedContent"
            :key="contentItem._path"
            class="mb-2"
          >
            <NuxtLink
              :to="contentItem._path"
              class="text-gray-500 dark:text-gray-400 duration-200 flex items-center gap-1.5 lg:gap-2 group"
              :class="{
                'hover:text-black dark:hover:text-white': contentItem._path !== route.path,
                'text-primary dark:text-primary': contentItem._path === route.path
              }"
            >
              <div class="rounded-md p-1 inline-flex ring-inset ring-1 bg-gray-100/50 dark:bg-gray-800/50 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background">
                <Icon :name="sidebarIcons[contentItem._path]" class="flex-shrink-0" />
              </div>
              <span class="text-sm/6 truncate">{{ contentItem.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: contentList } = await useAsyncData('nav', () => queryContent('/guide').find())

const contentGroups = computed(() => {
  const contentByGroupId = (contentList.value ?? []).reduce((contentGroups, { groupId, _path, _id, title }) => {
    const key = groupId
    const value = { _path, title }
    const collection = contentGroups.get(key);
    if (!collection) {
      contentGroups.set(key, [value])
    } else {
      collection.push(value)
    }
    return contentGroups
  }, new Map)

  return new Map([...contentByGroupId].sort())
})

const sidebarIcons = {
  '/guide/git': 'iconoir:git-compare',
  '/guide/javascript': 'fluent:javascript-16-regular',
  '/guide/markup': 'ooui:markup',
  '/guide/typescript': 'tabler:brand-typescript',
  '/guide/working-with-backend': 'streamline:database-server-1',
  '/guide/angular': 'simple-icons:angular',
  '/guide/frameworks-and-libraries': 'simple-icons:librariesdotio',
  '/guide/next': 'ion:logo-react',
  '/guide/nuxt': 'simple-icons:nuxtdotjs',
  '/guide/react': 'ion:logo-react',
  '/guide/vue': 'ion:logo-vue',
  '/guide/algorithms-and-data-structures': 'arcticons:algorithms',
  '/guide/general-questions': 'streamline:mail-chat-bubble-square-warning-bubble-square-messages-notification-chat-message-warning-alert',
  '/guide/accessibility': 'solar:accessibility-linear',
  '/guide/architecture': 'material-symbols:architecture-rounded',
  '/guide/browser-api': 'streamline:programming-browser-code-2-code-browser-tags-angle-programming-bracket',
  '/guide/network-and-protocols': 'material-symbols:network-node',
  '/guide/performance': 'eos-icons:performance',
  '/guide/security': 'material-symbols:shield-locked-outline-rounded',
  '/guide/testing': 'simple-icons:testinglibrary',
  '/guide/web-performance': 'streamline:programming-browser-dashboard-app-code-apps-programming-window-dashboard-performance',
  '/guide/code-challenges': 'fluent:braces-variable-20-regular'
}
</script>
