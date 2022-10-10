<template>
    <div>
        <h1>Em Desenvolvimento</h1>
        <button @click="login">Sair</button>
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$router.push({ name: 'home' })
            }
        }
    }
</script>