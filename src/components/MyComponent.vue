<template>
    <div class="hello">
      <!-- <h3>Installed CLI Plugins</h3>
      <ul>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
            rel="noopener">babel</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
            rel="noopener">eslint</a></li>
      </ul> -->
      <h3>Essential Links</h3>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank" rel="noopener"> Networks </a></li>
        <li><a href="http://127.0.0.1:3000/subnet/get_subnets" target="_blank" rel="noopener">Subnets</a></li>
        <li><a href="http://127.0.0.1:3000/node/get_nodes" target="_blank" rel="noopener">Nodes</a></li>
        <li><a href="http://127.0.0.1:3000/link/get_links" target="_blank" rel="noopener">Links</a></li>
        <li><a href="http://127.0.0.1:3000/ltp/get_ltps" target="_blank" rel="noopener">Ltps</a></li>
      </ul>
      <!-- <h3>Ecosystem</h3>
      <ul>
        <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
        <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
        <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
        </li>
        <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
      </ul> -->
    </div>
  </template>
  
  <script>
    export default {
      name: 'MyComponent',
      props: {
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    h3 {
      margin: 40px 0 0;
    }
  
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      display: inline-block;
      margin: 0 10px;
    }
  
    a {
      color: #4295b9;
    }
  </style>
  