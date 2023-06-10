<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Edit Task</h4>
        </div>
        <div class="card-body">
          <form @submit.prevet="updateTask">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label for="title_update">Title</label>
                  <input type="text" class="form-control" id="title_update" v-model="task.title">
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label for="text_update">Title</label>
                  <input type="text" class="form-control" id="text_update" v-model="task.description">
                </div>
              </div>
              <div class="col-12 mb-2">
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit-task',
  data() {
    return {
      task: {
        title: '',
        description: '',
        _method: 'patch'
      }
    }
  },
  mounted() {
    this.showTask()
  },
  methods: {
    showTask() {
      this.axios.get('/api/tasks/' + this.$route.params.id)
        .then(response => {
          const { title, description } = response.data;
          this.task.title = title;
          this.task.description = description;
        }).catch(error => {
          console.log(error);
        })
    },
    updateTask() {
      this.axios.post('/api/tasks/' + this.$route.params.id, this.task)
        .then(response => {
          this.$router.push({ name: 'taskList' })
        }).catch(error => {
          console.log(error);
        })
    }
  }
}
</script>
