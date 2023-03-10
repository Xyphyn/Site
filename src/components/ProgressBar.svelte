<script>
    export let progress = 0
</script>

<div
    class="bg-opacity-30 bg-secondary dark:bg-white h-1 rounded-full max-w-[8rem] w-full"
>
    <div
        class="bg-gradient-to-r from-primary to-secondary rounded-full h-1"
        style="width: {progress}%;"
    />
</div>
