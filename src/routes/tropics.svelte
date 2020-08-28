<script>
  if (process.browser) {
    const refreshTropicalTwitter = () => {
      document.querySelector('.tropical-reddit').src = './tropical-reddit.html';
    };

    window.setInterval(refreshTropicalTwitter, 60000);
  }
</script>

<style>
  .page {
    margin-top: -0.5em;
    padding-bottom: 1em;
    display: flex;
    flex-direction: column;
  }

  .out-of-storm-mode {
    display: flex;
    width: 100%;
    height: calc(100vh - 7em);
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h3 {
    margin-bottom: 0.5em;
    text-align: center;
  }

  .streams {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-content: flex-start;
  }

  .stream {
    margin: 1em 0;
    flex: 1 0 calc(100% - 1em);
  }

  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }

  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .stream iframe {
    width: 100%;
  }

  .offline-container {
    position: relative;
    display: flex;
    max-width: 100%;
    padding-bottom: 56.25%;
    background: #eee;
    justify-content: center;
    font-style: italic;
  }

  .offline {
    position: absolute;
    top: 50%;
    margin-top: -15px;
    height: 30px;
    display: flex;
    align-items: center;
  }

  .tropical-twitter {
    margin: 1em 0 0 0;
    width: 100%;
    height: 800px;
    border: 1px solid rgba(15, 70, 100, 0.12);
    overflow: auto;
  }

  .tropical-reddit {
    margin: 16px 0 0 0;
    width: 100%;
    min-height: 1000px;
    font-size: 14px;
    border: none;
    overflow: hidden;
  }

  :global(.reddit-title) {
    font-size: 18px;
  }

  @media (min-width: 1000px) {
    .page {
      margin-top: 0;
      flex-direction: row;
    }

    h3 {
      text-align: left;
    }

    .tropical-twitter {
      margin: 1em 1em 0 0;
      width: 22%;
      height: 1423px;
    }

    .tropical-reddit {
      margin: 16px 0 0 0;
      width: 18%;
      height: 1423px;
      border: 1px solid rgba(15, 70, 100, 0.12);
    }

    .streams {
      width: 60%;
    }

    .embed-container,
    .offline-container {
      max-width: calc(100% - 1em);
    }
  }

  @media (min-width: 1150px) {
    .stream {
      margin: 1em 1em 1em 0;
      flex: 1 0 calc(50% - 1em);
    }

    .embed-container,
    .offline-container {
      max-width: 100%;
      width: 100%;
    }
  }
</style>

<svelte:head>
  <title>zak.dog</title>
</svelte:head>

<div class="page">
  <div class="out-of-storm-mode">
    <h1>We are currently out of storm mode.</h1>
  </div>
</div>
