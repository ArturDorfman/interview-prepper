<template>
  <article class="prose dark:prose-invert prose-pre:bg-white max-w-none w-full
    dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <ContentDoc>
      <template #not-found>
        Document not found
      </template>

      <template #default="{ doc }">
        <div class="grid grid-cols-12 gap-8">
          <div class="not-prose col-span-2">
            <SideBarNavigation />
          </div>

          <div class="col-span-8">
            <ContentRenderer :value="doc" />
          </div>

          <div class="not-prose col-span-2">
            <TableOfContents :links="doc.body.toc.links" />
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>
