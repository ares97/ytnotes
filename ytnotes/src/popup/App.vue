<template>
    <div class="container">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-toolbar>
                    <div class="md-layout md-alignment-center-left">
                        <img src="/icons/icon_48.png" alt="Avatar">
                        <h3 class="md-title">YT Notes</h3>
                    </div>
                    <!--                    <div class="md-toolbar-section-end">-->
                    <!--                        <a href="../options/options.html" target="_blank">-->
                    <!--                            <md-button class="md-icon-button">-->
                    <!--                                <md-icon>settings</md-icon>-->
                    <!--                            </md-button>-->
                    <!--                        </a>-->
                    <!--                    </div>-->
                </md-toolbar>
            </div>
        </div>
        <div class="inner-container">
            <div class="md-layout md-gutter">
                <div class="md-layout">
                    <div class="md-layout-item">
                        <div>
                            <md-field>
                                <label>Title</label>
                                <md-input v-model="currentTitle" disabled/>
                            </md-field>
                        </div>

                        <div>
                            <md-field>
                                <label>Notes</label>
                                <md-textarea class="note-text-area" v-model="note" placeholder="place for your notes"/>
                            </md-field>
                        </div>
                        <div class="save-notes-button">
                            <md-button class="md-raised md-accent" v-on:click="saveNote">
                                SAVE
                            </md-button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <md-toolbar v-if="errorMessage" class="md-accent error-message md-layout md-alignment-center-center">
            <p>{{ errorMessage }}</p>
        </md-toolbar>
    </div>
</template>

<script>
import axios from 'axios'
const url = 'https://6fcvk5h0te.execute-api.eu-west-1.amazonaws.com/stage/notes'
export default {
  data () {
    return {
      errorMessage: '',
      currentTitle: '',
      currentUrl: '',
      currentVideoId: '',
      note: ''
    }
  },
  created () {
    chrome.tabs.query({ active: true }, (tabs) => {
      this.currentTitle = tabs[0].title
      this.currentUrl = tabs[0].url
      const currentUrl = new URL(this.currentUrl)
      this.currentVideoId = currentUrl.searchParams.get('v')
      this.getNote()
    })
  },
  methods: {
    getNote () {
      axios.get(url + '/' + this.currentVideoId)
        .then(response => {
          this.note = response.data.note
        })
    },
    saveNote () {
      axios.post(url, {
        note: this.note,
        videoId: this.currentVideoId
      })
    }
  }
}
</script>

<style>
    .container {
        position: relative;
        background: #fff;
        width: 350px;
        height: 450px;
    }

    .md-layout-item {
        position: relative;
    }

    .inner-container {
        padding: 20px;
    }

    .note-text-area {
        display: inline-block;
        width: 100%;
    }

    .save-notes-button {
        display: flex;
        justify-content: flex-end;
    }
</style>
