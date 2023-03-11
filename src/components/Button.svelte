<script lang="ts">
    export let link = true
    export let href = ''
    let clazz = ''

    export { clazz as class }
</script>

{#if link}
    <a
        {href}
        class="px-2 py-1 hover:shadow-lg hover:-translate-y-[2px] rounded-lg transition-all flex flex-row items-center gap-2 {clazz}"
        ><slot /></a
    >
{/if}
