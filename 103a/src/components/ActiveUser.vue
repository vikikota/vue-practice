<template>
<div>
    <h2>USERNAME: {{ userName }}</h2>
    <h3>AGE: {{ userAge }}</h3>
</div>
</template>

<script>
export default {
    props: {
        userName:{
            type: String,
            required: true
        },
        userAge:{
            type: Number,
            required: true
        },
    }
};
</script>
