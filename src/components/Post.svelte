<script lang="ts">
    import type { CollectionEntry } from 'astro:content'

    export let post: CollectionEntry<'blog'>
</script>

<a
    class="relative bg-slate-200 dark:bg-gray-900 shadow-xl aspect-square rounded-lg
    hover:-translate-y-2 transition-transform ease-out duration-250 cursor-pointer
    flex flex-col overflow-hidden"
    href={`/blog/${post.slug}`}
>
    {#if post.data.image}
        <img
            src={post.data.image}
            class="w-full h-full object-cover object-top rounded-t-lg"
            alt={post.data.description}
        />
    {/if}
    <span
        class="absolute gap-2 bottom-0 left-0 w-full flex-1 p-4 bg-white
    text-black dark:bg-slate-800 dark:text-white
     rounded-b-lg flex flex-col justify-end"
    >
        <span class="text-xl">{post.data.title}</span>
        <span class="text-slate-700 dark:text-slate-400 text-sm"
            >{post.data.description}</span
        >
        <span class="self-end">{post.data.author}</span>
    </span>
</a>
