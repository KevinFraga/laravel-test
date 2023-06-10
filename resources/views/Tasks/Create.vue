<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Create New Task</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="createTask">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" class="form-control" id="title" v-model="task.title">
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label for="description">Description</label>
                  <input type="text" class="form-control" id="description" v-model="task.description">
                </div>
              </div>
              <div class="col-12 mb-2">
                <button type="submit" class="btn btn-primary">Save</button>
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
  name: 'create-task',
  data() {
    return {
      task: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    createTask() {
      this.axios.post('/api/tasks', this.task)
        .then(response => {
          this.$router.push({ name: 'taskList' })
        }).catch(error => {
          console.log(error);
        });
    }
  }
}
</script>