<script lang="ts">
    export let link = true
    export let href = ''
    let clazz = ''

    export { clazz as class }
</script>

{#if link}
    <a {href} class="hover:underline flex flex-row items-center gap-2 {clazz}"
        ><slot /></a
    >
{/if}
