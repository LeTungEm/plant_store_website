<template>
  <div>
    <PageTemplate>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10">
        <NewsItemMolecule v-for="newData in newsData" :key="newData" :news="newData" />
      </div>
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from "@/components/templates/PageTemplate.vue";
import NewsItemMolecule from '@/components/molecules/NewsItemMolecule.vue';

export default {
  name: "NewsView",
  data(){
    return {
      newsData: [
        {
          name: 'Thảo nguyên xanh',
          description: 'Bầu trời xanh thảo nguyên xanh. Bầu trời xanh thảo nguyên xanh. Bầu trời xanh thảo nguyên xanh. Bầu trời xanh thảo nguyên xanh. Bầu trời xanh thảo nguyên xanh. Bầu trời xanh thảo nguyên xanh. Bầu trời xanh thảo nguyên xanh. Bầu trời xanh thảo nguyên xanh. '
        },
        {
          name: 'Cách trồng cây thân lớn',
          description: 'Bầu trời xanh thảo nguyên xanh. Bầu trời xanh thảo nguyên xanh. Bầu trời xanh thảo nguyên xanh. '
        }
      ]
    };
  },
  components: { PageTemplate, NewsItemMolecule },
};
</script>

<style>
</style>