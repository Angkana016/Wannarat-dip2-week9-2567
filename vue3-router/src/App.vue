<template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/user">Users</router-link>
    </div>
    <router-view />
</template>

<script>
export default {

}
</script>
<style>
.router-link-exact-active {
    color: red;
}
</style>