<template>
    <ul>
        <li v-for="goal in goals" :key="goal">{{ goal }}</li>
        <li v-for="name in pupils" :key="name"> {{ name }}</li>
        <slot :item="goal" :anotherProps="name"></slot>
    </ul>
</template>

<script>
export default {
    data() {
       return {
        goals :['Finish the course', 'Learn VUE'],
        pupils: ['Viki', 'Tiki', 'Riki']
       } 
    },
}
</script>