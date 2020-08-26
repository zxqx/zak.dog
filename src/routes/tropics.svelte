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
    display: flex;
    flex-direction: column;
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
    width: 100%;
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
    border: 1px solid rgba(15, 70, 100, 0.12);
  }

  .tropical-reddit {
    margin: 1em 0 0 0;
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
    }

    .tropical-reddit {
      margin: 1em 0 0 0;
      width: 18%;
    }

    .streams {
      width: 60%;
    }
  }

  @media (min-width: 1150px) {
    .stream {
      margin: 1em 1em 1em 0;
      flex: 1 0 calc(50% - 1em);
    }
  }
</style>

<svelte:head>
  <title>Storm Mode / zak.dog</title>
</svelte:head>

<div class="page">
  <div class="streams">

    <div class="stream">
      <h3>Weather Channel</h3>
      <div class="embed-container">
        <iframe
          title="Weather Channel"
          type="text/html"
          src="https://www.youtube.com/embed/beG4qzG6bFM?autoplay=1&mute=1"
          frameborder="0"
          allow="autoplay"
          allowfullscreen="1" />
      </div>
    </div>

    <div class="stream">
      <h3>Coastal Webcams</h3>
      <div class="embed-container">
        <iframe
          title="Coastal Webcams"
          type="text/html"
          src="https://www.youtube.com/embed/NPUC0vjYja0?autoplay=1&mute=1"
          frameborder="0"
          allow="autoplay"
          allowfullscreen="1" />
      </div>
    </div>

    <div class="stream">
      <h3>Galveston Beach</h3>
      <div class="embed-container">
        <iframe
          title="Galveston Beach"
          type="text/html"
          src="https://www.youtube.com/embed/GEZy1rcNQWE?autoplay=1&mute=1"
          frameborder="0"
          allow="autoplay"
          allowfullscreen="1" />
      </div>
    </div>

    <div class="stream">
      <h3>Southeast TX Beach</h3>
      <div class="embed-container">
        <iframe
          title="Southeast TX Beach"
          type="text/html"
          src="https://www.youtube.com/embed/1pq1vCA78ag?autoplay=1&mute=1"
          frameborder="0"
          allow="autoplay"
          allowfullscreen="1" />
      </div>
    </div>

    <div class="stream">
      <h3>Lake Charles</h3>
      <div class="embed-container">
        <iframe
          title="Lake Charles"
          type="text/html"
          src="https://www.youtube.com/embed/Iwa3-LOKR7c?autoplay=1&mute=1"
          frameborder="0"
          allow="autoplay"
          allowfullscreen="1" />
      </div>
    </div>

    <div class="stream">
      <h3>New Orleans</h3>
      <div class="embed-container">
        <iframe
          title="New Orleans"
          type="text/html"
          src="https://www.youtube.com/embed/2k4zpeUd_gI?autoplay=1&mute=1"
          frameborder="0"
          allow="autoplay"
          allowfullscreen="1" />
      </div>
    </div>

    <div class="stream">
      <h3>Houston</h3>
      <div class="embed-container">
        <iframe
          title="Houston"
          type="text/html"
          src="https://www.youtube.com/embed/ZuoL3P2dgmg?autoplay=1&mute=1"
          frameborder="0"
          allow="autoplay"
          allowfullscreen="1" />
      </div>
    </div>

    <div class="stream">
      <h3>Space Videos</h3>
      <div class="embed-container">
        <iframe
          title="Space Videos"
          type="text/html"
          src="https://www.youtube.com/embed/2llqoT9qkkY?autoplay=1&mute=1"
          frameborder="0"
          allow="autoplay"
          allowfullscreen="1" />
      </div>
    </div>

    <div class="stream">
      <h3>Agenda Free TV</h3>
      <div class="offline-container">
        <span class="offline">(currently offline)</span>
      </div>
    </div>

    <div class="stream">
      <h3>Jeff Piotrowski</h3>
      <div class="offline-container">
        <span class="offline">(currently offline)</span>
      </div>
    </div>
  </div>

  <div class="tropical-twitter">
    <a
      class="twitter-timeline"
      href="https://twitter.com/wx_becks/lists/tropical-twitter?ref_src=twsrc%5Etfw" />
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">

    </script>
  </div>

  <iframe class="tropical-reddit" src="./tropical-reddit.html" />
</div>
