<script>
  import OpenSeaDragon from "openseadragon";
  import { onMount } from "svelte";

  export let imageEndpointArray;

  onMount(() => {
        const osd = new OpenSeaDragon({
        id: "osd",
        sequenceMode: true,
        prefixUrl: "/images/openseadragon/",
        tileSources: imageEndpointArray
    });
  })


</script>

<div class="block w-full aspect-square bg-black">
  <div id="osd" class="w-full h-full" />
</div>
