// 翻译router.meta。标题，用于面包屑侧边栏tagsview
export function generateTitle(title) {
  const hasKey = this.$te('route.' + title)
  console.log('this.$te', this.$te)
  console.log('hasKey', hasKey)
  console.log('title', title)
  console.log(`'route.' + title`, 'route.' + title)
  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    const translatedTitle = this.$t('route.' + title)

    return translatedTitle
  }
  return title
}
