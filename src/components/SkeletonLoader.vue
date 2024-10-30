<template>
   <div class="container mx-auto p-6">

      <!-- Skeleton for Large Block -->
      <div class="col-span-2 row-span-2 bg-white border border-gray-200 rounded-lg shadow p-5">
        <div class="skeleton-image-large mb-4"></div>
        <div class="skeleton-title-large mb-2"></div>
        <div class="skeleton-text mb-2"></div>
        <div class="skeleton-text mb-2"></div>
        <div class="skeleton-date"></div>
      </div>

      <!-- Skeletons for Smaller Articles -->
      <div v-for="n in 5" :key="n" class="bg-white border border-gray-200 rounded-lg shadow p-4">
        <div class="skeleton-image-small mb-4"></div>
        <div class="skeleton-title mb-2"></div>
        <div class="skeleton-date"></div>
      </div>
    </div>
</template>

<style scoped>
/* Skeleton styles */
.skeleton-image-large {
  width: 100%;
  height: 256px;
  background: #ddd;
  border-radius: 0.5rem 0.5rem 0 0;
}

.skeleton-title-large {
  width: 70%;
  height: 24px;
  background: #ccc;
  border-radius: 4px;
}

.skeleton-image-small {
  width: 100%;
  height: 128px;
  background: #ddd;
  border-radius: 0.5rem 0.5rem 0 0;
}

.skeleton-title {
  width: 60%;
  height: 18px;
  background: #ccc;
  border-radius: 4px;
}

.skeleton-text {
  width: 90%;
  height: 14px;
  background: #eee;
  border-radius: 4px;
}

.skeleton-date {
  width: 50%;
  height: 14px;
  background: #e0e0e0;
  border-radius: 4px;
}
</style>