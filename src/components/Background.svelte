<script>
    import { onMount } from 'svelte'

    const gradients = []
    const numGradients = 10

    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    function addGradient() {
        gradients.push({
            x: getRandomInt(window.innerWidth),
            y: getRandomInt(window.innerHeight),
            size: getRandomInt(200) + 100,
        })
        if (gradients.length > numGradients) {
            gradients.shift()
        }
    }

    onMount(() => {
        setInterval(addGradient, 500)
    })
</script>

<div class="background">
    {#each gradients as gradient}
        <div
            class="gradient"
            style="
          width: {gradient.size}px;
          height: {gradient.size}px;
          background: radial-gradient(
            circle at {gradient.x}px {gradient.y}px,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0)
          );
          top: {gradient.y - gradient.size / 2}px;
          left: {gradient.x - gradient.size / 2}px;
        "
        />
    {/each}
</div>

<style>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .gradient {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        opacity: 0.8;
        pointer-events: none;
        transition: opacity 1s ease-in-out;
    }
</style>
