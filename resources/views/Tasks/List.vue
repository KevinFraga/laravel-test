<template>
  <div class="row">
    <div class="col-12 mb-2 text-end">
      <router-link :to="{ name: 'taskCreate' }" class="btn btn-primary">Create Task</router-link>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Tasks</h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody v-if="tasks.length > 0">
                <tr v-for="task in tasks">
                  <td>{{ task.id }}</td>
                  <td>{{ task.title }}</td>
                  <td>{{ task.description }}</td>
                  <td>
                    <router-link :to="{ name: 'taskEdit', params: { id: task.id } }"
                      class="btn btn-primary">Edit</router-link>
                    <button type="button" @click="completeTask(task.id)" class="btn btn-danger">Complete</button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="4" align="center">No tasks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tasks',
  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      this.axios.get('/api/tasks')
        .then(response => {
          this.tasks = response.data;
        }).catch(error => {
          console.log(error);
          this.tasks = [];
        })
    },
    completeTask(id) {
      if (confirm('Are you sure you want to complete this task?')) {
        this.axios.delete('/api/tasks/' + id)
          .then(response => {
            this.fetchTasks();
          }).catch(error => {
            console.log(error);
          })
      }
    }
  }
}
</script>