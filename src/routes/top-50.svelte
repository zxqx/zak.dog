<script>
  const getAlbums = (async () => {
    const response = await self.fetch('./top-50.json');

    if (response.ok) {
      const albums = await response.json();
      return albums.reverse();
    } else {
      throw new Error(users);
    }
  })();
</script>

<svelte:head>
  <title>Top 50</title>
</svelte:head>

{#await getAlbums}
  <div>Loading...</div>
{:then albums}

  <ol>
    {#each albums as album, i}
      <li class="album">
        <img
          src={album.albumArtUrl}
          alt={`${album.artist} - ${album.title}`}
          class="album-art" />

        <div class="album-info">
          <h4>{50 - i}.</h4>
          <h3>{album.artist}</h3>
          <h2>
            {album.title}
            <span class="release-year">({album.year})</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ante diam, scelerisque id ultricies eu, dignissim sit amet libero.
            Proin at mi vitae enim euismod hendrerit feugiat a arcu. Donec
            rhoncus ex sit amet nisl tempus dapibus. Duis dolor arcu, dapibus
            mollis vestibulum et, iaculis id ex.
          </p>
        </div>
      </li>
    {/each}
  </ol>
{/await}
