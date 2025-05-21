<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card
          title="Chats"
          append-icon="mdi-plus"
          class="pa-6 bg-primary m-height-cards"
          rounded="xl"
          elevation="4"
        >
          <v-text-field
            variant="outlined"
            label="Pesquisar"
            single-line
            prepend-inner-icon="mdi-magnify"
            density="compact"
            clearable
          />
          <v-list class="bg-primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              class="py-3 my-3 px-1"
            >
              <template v-slot:prepend>
                <v-badge dot v-if="item.online" color="green" size="x-small">
                  <v-avatar>
                    <v-img :src="item.prependAvatar" />
                  </v-avatar>
                </v-badge>
                <v-avatar v-else>
                  <v-img :src="item.prependAvatar" />
                </v-avatar>
              </template>

              <v-list-item-title class="text-white">
                {{ item.title }}
              </v-list-item-title>

              <v-list-item-subtitle class="text-white text-truncate">
                {{ item.subtitle }}
              </v-list-item-subtitle>

              <template v-slot:append>
                <v-badge
                  v-if="item.badge"
                  color="info"
                  :content="item.badge"
                  inline
                />
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          class="pa-6 bg-primary m-height-cards"
          rounded="xl"
          elevation="4"
        >
          <h1>ola</h1>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          class="pa-6 d-flex bg-primary flex-column flex-md-row m-height-cards"
          rounded="xl"
          elevation="4"
        >
          <v-avatar size="200" class="me-6">
            <v-img
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              alt="Avatar"
            />
          </v-avatar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const items = ref([
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    title: "Brunch this weekend?",
    subtitle: `Ali Connors I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    badge: "3",
    online: true,
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    title: "Summer BBQ",
    subtitle: ` Alex, Scott, Jennifer Wish I could come, but I'm out of town this weekend.`,
    badge: "5",
    online: false,
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    title: "Oui oui",
    subtitle:
      "Sandra Adams Do you have Paris recommendations? Have you ever been?",
    badge: "6",
    online: true,
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    title: "Birthday gift",
    subtitle:
      "Trevor Hansen Have any ideas about what we should get Heidi for her birthday?",
    badge: "1",
    online: false,
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    title: "Recipe to try",
    subtitle:
      " Britta Holt  We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
    online: true,
  },
]);
</script>

<style scoped>
.m-height-cards {
  height: 89.5vh !important;
}
</style>
