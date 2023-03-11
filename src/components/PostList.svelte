<script lang="ts">
    import type { CollectionEntry } from 'astro:content'
    import Post from './Post.svelte'

    export let posts: CollectionEntry<'blog'>[]
</script>

<div
    class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4"
>
    {#each posts as post}
        <Post {post} />
    {/each}
</div>
