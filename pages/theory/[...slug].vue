<template>
  <article class="prose dark:prose-invert prose-pre:bg-white max-w-none w-full
    dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <ContentDoc v-slot="{ doc }">
      <div class="flex justify-between gap-8">
        <div class="w-full">
          <ContentRenderer :value="doc" />
        </div>

        <div class="not-prose flex justify-end">
          <TableOfContents :links="doc.body.toc.links" />
        </div>
      </div>
    </ContentDoc>
  </article>
</template>
