<template>
    <div class="m-4 w-2/12 rounded-3xl p-2 border border-gray-800 text-center bg-gray-800 text-white">
        {{ data }}
    </div>
</template>

<script>
export default {
    props: {
        data: String
    }
}
</script>