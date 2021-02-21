import { createStore } from 'vuex'

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

export default createStore({
  state: {
    stack: {
      top: 0,
      data: {

      },
      print() {
        let array = []
        for (let index = this.top - 1; index >= 0; index--) {
          array.push(this.data[index]);
        }
        return array;
      }
    },
    queue: {
      front: 0,
      end: 0,
      data: {
      },
      print() {
        let array = []
        for (let index = this.end - 1; index >= this.front; index--) {
          array.push(this.data[index]);
        }
        console.log(array);
        return array;
      }
    },
    list: {
      head: null,
      size: 0,
      insert(data) {
        const node = new Node(data, null)
        if (!this.head) {
          this.head = node;
          this.size++
          return;
        } else {
          let current = this.head;

          while (current.next) {
            current = current.next
          }
          this.size++
          current.next = node
        }
      },
      insertAt(data, index) {
        if (index < 0 || index > this.size) {
          return null
        }
        const node = new Node(data, null)
        if (index == 0) {
          node.next = this.head;
          this.head = node;
          this.size++
          return;
        } else {
          let current = this.head;
          let previus;
          console.log(index);
          for (let i = 0; i < index; i++) {
            previus = current
            current = current.next
            console.log(current);
          }
          node.next = current;
          previus.next = node
          this.size++
          return;
        }
      },
      print() {
        if (this.size == 0) {
          return
        }

        let array = []
        let current = this.head;

        while (current) {
          array.push(current.data)
          array.push("->")
          current = current.next
        }

        array.push('X')
        return array
      },
      deleteAt(index) {
        if (index < 0 || index > this.size) {
          return null
        }
        if (index == 0) {
          this.head = this.head.next;
          this.size--;
          return;
        } else {
          let current = this.head;
          let previus;
          for (let i = 0; i < index; i++) {
            previus = current
            current = current.next
            console.log(current);
          }
          previus.next = current.next
          return;
        }
      }
    }
  },
  mutations: {
    insertInStack(state, payload) {
      state.stack.data[state.stack.top] = payload
      state.stack.top++;
    },
    deleteInStack(state) {
      if (state.stack.top == 0) {
        return null
      }
      delete state.stack.data[state.stack.top - 1]
      this.state.stack.top--;
    },
    insertInQueue(state, payload) {
      state.queue.data[state.queue.end] = payload
      state.queue.end++;
    },
    deleteInQueue(state) {
      if (state.queue.end == state.queue.front) {
        return null;
      }
      this.state.queue.front++;
    },
    insertInList(state, payload) {
      state.list.insert(payload)
    },
    insertAtList(state, payload) {
      state.list.insertAt(payload.data, payload.index)
    },
    deleteAtList(state,payload) {
      state.list.deleteAt(payload)
    }
  },
  actions: {
    insertInStack({ commit }, data) {
      commit('insertInStack', data)
    },
    deleteInStack({ commit }) {
      commit('deleteInStack')
    },
    insertInQueue({ commit }, data) {
      commit('insertInQueue', data)
    },
    deleteInQueue({ commit }) {
      commit('deleteInQueue')
    },
    insertInList({ commit }, data) {
      commit('insertInList', data)
    },
    insertAtList({ commit }, payload) {
      commit('insertAtList', payload)
    },
    deleteAtList({commit},id) {
      commit('deleteAtList',id)
    }
  },
})
