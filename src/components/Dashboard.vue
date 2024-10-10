<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { 
  Bell, 
  ChevronDown, 
  Search, 
  Calendar, 
  FileText, 
  BarChart2, 
  ShoppingBag, 
  FileSpreadsheet, 
  Repeat, 
  Puzzle, 
  Users, 
  Award, 
  ArrowUp, 
  Settings, 
  HelpCircle 
} from 'lucide-vue-next'
import Chart from 'chart.js/auto'

const router = useRouter()
const user = ref({
  name: 'Brandon Rosser',
  role: 'Admin',
  avatar: '/placeholder.svg?height=40&width=40'
})
const notifications = ref(2)
const searchQuery = ref('')
const stats = ref({
  grossRevenue: 2480.32,
  avgOrderValue: 56.12,
  totalOrders: 230
})

const navigateTo = (route) => {
  router.push(route)
}

onMounted(() => {
  const ctx = document.getElementById('transactionChart')
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Total transaction',
        data: [400, 300, 500, 400, 600, 500, 600, 500, 600, 400, 500, 400],
        borderColor: 'rgb(138, 43, 226)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  })
})
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md">
      <div class="p-4">
        <h1 class="text-2xl font-bold text-purple-600">Salepol</h1>
      </div>
      <nav class="mt-4">
        <a @click="navigateTo('/dashboard')" class="flex items-center px-4 py-2 text-gray-700 bg-gray-100">
          <BarChart2 class="w-5 h-5 mr-2" />
          Dashboard
        </a>
        <div class="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">General</div>
        <a @click="navigateTo('/analytics')" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <ShoppingBag class="w-5 h-5 mr-2 " />
          Analytics
        </a>
        <a @click="navigateTo('/shop-analyzer')" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <FileSpreadsheet class="w-5 h-5 mr-2" />
          Shop Analyzer
        </a>
        <a @click="navigateTo('/sales-report')" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <FileText class="w-5 h-5 mr-2" />
          Sales Report
        </a>
        <a @click="navigateTo('/transactions')" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Repeat class="w-5 h-5 mr-2" />
          Transactions
        </a>
        <div class="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Other Tools</div>
        <a @click="navigateTo('/extensions')" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Puzzle class="w-5 h-5 mr-2" />
          Extensions
        </a>
        <a @click="navigateTo('/affiliate-program')" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Users class="w-5 h-5 mr-2" />
          Affiliate Program
        </a>
        <a @click="navigateTo('/upgrade')" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Award class="w-5 h-5 mr-2" />
          Upgrade
        </a>
        <div class="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Support</div>
        <a @click="navigateTo('/settings')" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Settings class="w-5 h-5 mr-2" />
          Settings
        </a>
        <a @click="navigateTo('/help-center')" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <HelpCircle class="w-5 h-5 mr-2" />
          Help Center
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div class="container mx-auto px-6 py-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-semibold text-gray-800">Welcome Back {{ user.name }}</h2>
          <div class="flex items-center">
            <button class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span class="sr-only">Notifications</span>
              <Bell class="w-6 h-6" />
              <span class="absolute top-0 right-0 inline-block w-3 h-3 bg-red-600 border-2 border-white rounded-full"></span>
            </button>
            <button class="flex items-center ml-4 text-sm font-medium text-gray-700 hover:text-gray-800 focus:outline-none focus:text-gray-800">
              <img class="h-8 w-8 rounded-full object-cover" :src="user.avatar" :alt="user.name" />
              <span class="ml-2">{{ user.name }}</span>
              <ChevronDown class="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        <div class="mb-4">You have {{ notifications }} unread notifications</div>

        <div class="flex mb-8">
          <div class="w-full bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold">Search</h3>
            </div>
            <div class="relative">
              <input v-model="searchQuery" type="text" class="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500" placeholder="Search...">
              <div class="absolute top-0 left-0 mt-3 ml-3 text-gray-400">
                <Search class="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-6">
          <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                <svg class="w-8 h-8 text-white" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z" fill="currentColor"/>
                  <path d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z" fill="currentColor"/>
                  <path d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z" fill="currentColor"/>
                  <path d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z" fill="currentColor"/>
                  <path d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z" fill="currentColor"/>
                  <path d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z" fill="currentColor"/>
                </svg>
              </div>
              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">${{ stats.grossRevenue.toFixed(2) }}</h4>
                <div class="text-gray-500">Gross Revenue</div>
              </div>
            </div>
          </div>
          <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div class="p-3 bg-orange-600 bg-opacity-75 rounded-full">
                <svg class="w-8 h-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z" fill="currentColor"/>
                  <path d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z" fill="currentColor"/>
                  <path d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z" fill="currentColor"/>
                </svg>
              </div>
              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">${{ stats.avgOrderValue.toFixed(2) }}</h4>
                <div class="text-gray-500">Avg. Order Value</div>
              </div>
            </div>
          </div>
          <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div class="p-3 bg-pink-600 bg-opacity-75    rounded-full">
                <svg class="w-8 h-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                  <path d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">{{ stats.totalOrders }}</h4>
                <div class="text-gray-500">Total Orders</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md mr-4 mb-4 md:mb-0">
              <h3 class="text-xl font-semibold mb-4">Transaction activity</h3>
              <div class="h-64">
                <canvas id="transactionChart"></canvas>
              </div>
            </div>
            <div class="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">Orders by time </h3>
              <!-- Placeholder for Orders by time chart -->
              <div class="h-64 bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500"> Orders by time chart </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>

</style>