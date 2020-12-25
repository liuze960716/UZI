<template>
  <div>
    <VirtualCollection
        :cellSizeAndPositionGetter="cellSizeAndPositionGetter"
        :collection="collectionGroups"
        :height="500"
        :width="500"
    >
      <div class="grid-cell" slot="cell" slot-scope="{data}">
        <ChessTile v-if="data.isTile" />
        <ChessPiece v-else />
      </div>
    </VirtualCollection>
  </div>
</template>

<script>
import Vue from 'vue'
import VirtualCollection from 'vue-virtual-collection'

Vue.use(VirtualCollection)
export default {
  name: "test",
  data() {
    return {
      chessTiles: [ { data: { isTile: true } }, /* ... */ ],
      chessPieces: [ { data: { isPiece: true } }, /* ... */ ],
      collectionGroups: [ { group: [] }, { group: [] } ]
    }
  },
  watch: {
    chessTiles: function (chessTiles) {
      this.collectionGroups[0].group = chessTiles;
    },
    chessPieces: function (chessPieces) {
      this.collectionGroups[1].group = chessPieces
    }
  },
  methods: {
    cellSizeAndPositionGetter(item, itemIndex, groupIndex) {
      switch (groupIndex)
      {
        case 0:
          // Compute size and position for chessboard tile
          return { width: 0, height: 0, x: 0, y: 0 }

        case 1:
          // Compute size and position for chess piece
          return { width: 0, height: 0, x: 0, y: 0 }

        default:
          throw new Error("Not a tile or piece")
      }
    }
  }
}
</script>

<style scoped>

</style>