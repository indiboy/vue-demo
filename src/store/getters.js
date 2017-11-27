/**
 * Created by Administrator on 2017/10/23.
 * 根级别的 getter
 */
export default {
  doneTodos: function (state) {
    return state.todos.filter(todo => todo.done)
  }
}
