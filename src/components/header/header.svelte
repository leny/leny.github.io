<header>
    <h1>
        <Leny />
        <Name {title} />
    </h1>
</header>

<style>
    header {
        margin: 0;
    }

    @media (min-width: 640px) {
        header {
            width: 24rem;
            float: "left";
        }
    }

    h1 {
        margin: 0 0 2rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
</style>

<script>
    import Leny from "../svg/leny.svelte";
    import Name from "../svg/leny.me.svelte";

    const title = "leny.me";
</script>
