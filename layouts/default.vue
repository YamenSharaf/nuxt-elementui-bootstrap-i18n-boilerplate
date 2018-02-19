<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">
          <h1 class="h3">
            {{ $t('home.title') }}
          </h1>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <nuxt-link class="Header__Link" v-if="$i18n.locale === 'en'" :to="`/ar` + $route.fullPath" active-class="none" exact>
              <el-button @click="switchLang('ar')" type="default" round >
                <span class="text-primary">
                  {{ $t('links.arabic') }}

                </span>
              </el-button>
            </nuxt-link>
            <nuxt-link class="Header__Link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
              <el-button @click="switchLang('ar')" type="default" round >
                <span class="text-primary">
                  {{ $t('links.english') }}

                </span>
              </el-button>
            </nuxt-link>
          </b-navbar-nav>

        </b-collapse>

      </b-container>

    </b-navbar>
    <nuxt/>
  </div>
</template>

<style>

</style>
