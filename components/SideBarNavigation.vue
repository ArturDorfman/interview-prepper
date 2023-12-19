<template>
  <section class="sticky top-16 overflow-y-auto side-bar-scroll">
    <ul>
      <li
        v-for="([groupName, groupedContent]) in contentGroups"
        :key="groupName"
      >
        <ul class="mb-3">
          <p class="uppercase cursor-default">{{ groupName }}</p>
          <li
            v-for="contentItem in groupedContent"
            :key="contentItem._path"
          >
            <NuxtLink
                :to="contentItem._path"
                class="block ml-3 text-gray-500 dark:text-gray-400 duration-200"
                :class="{
              'hover:text-black dark:hover:text-white': contentItem._path !== route.path,
              'text-primary dark:text-primary': contentItem._path === route.path
            }"
            >
              {{ contentItem.title }}
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
</script>
