<template>
  <header class="header">
    <div class="header__image-wr">
      <img src="../../public/img/lion1.png" alt="lion">
    </div>
    <h1>CRM Minin Tutorial</h1>
    <nav class="header__nav nav-wrapper">
      <div class="header__nav-right right">
        <router-link to='/'>Home</router-link>
        <router-link to='/catigories'>Catigories</router-link>
        <router-link to='/history'>History</router-link>
        <router-link to='/planning'>Planning</router-link>
        <router-link to='/profile'>Profile</router-link>
        <router-link to='/record'>Record</router-link>
        <router-link to='/detailrecord'>Detail_record</router-link>
        <router-link to='/login'>Authorization</router-link>
        <router-link to='/registration'>Reg</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped>
header {
  background-color: #b1dbe9;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1
{
  font-size: 30px;
  font-weight: 700;
}
.header__image-wr
{
  width: 80px;
  height: 80px;
}
.header__image-wr img
{
  width: 100%;
}
.header__nav-right >*
{
  margin-right: 10px;
}
/*.header__nav-right > *:not(:last-child)
{
  margin-right: 10px;
}*/
</style>

