<div class="wrapper">
    <main>
        <Header />
        <Presentation />
    </main>
</div>

<style>
    .wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        transform: translateZ(0);
        transform-origin: preserve-3d;
    }

    main {
        width: 90%;
    }

    @media (min-width: 640px) {
        main {
            max-width: 58rem;
        }

        main::before,
        main::after {
            content: "";
            display: table;
        }

        main::after {
            clear: both;
        }
    }
</style>

<script>
    import Header from "./components/header/header.svelte";
    import Presentation from "./components/presentation/presentation.svelte";
</script>
