<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">
                        I'm an example component!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Default Title',
    // all titles will be injected into this template
    titleTemplate: '%s | My Awesome Webapp'
  },
  created () {
    this.test()
  },
  mounted () {
    console.log('Component mounted. Index.')
  },
  data () {
    return {
      aaa: {}
    }
  },
  methods: {
    test () {
      this.$http({
        url: '/api/test',
        method: 'GET'
      }).then((res) => {
        this.aaa = res.data
        console.log(res)
      })
    }
  }
}
</script>
