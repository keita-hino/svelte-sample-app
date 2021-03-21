<main>
	<h1>Todo</h1>
	<TaskInput on:save={onSave}/>

	<h1>Backlog</h1>
	<BacklogTasks {backlogTasks} on:done={onDone}/>

	<h1>Done</h1>
	<DoneTasks {doneTasks}/>
</main>

<script>
	import TaskInput from './TaskInput.svelte';
	import BacklogTasks from './BacklogTasks.svelte';
	import DoneTasks from './DoneTasks.svelte';
	import { onMount } from 'svelte'

	let tasks = []
	$: backlogTasks = tasks.filter( task => task.status == 'backlog');
	$: doneTasks = tasks.filter( task => task.status == 'done');

	const onSave = async (event) => {
		// TODO: この辺りの記述は重複してるので、あとあとまとめたい
		const db = firebase.firestore();

		await db.collection("tasks").add({
			id: tasks.length + 1,
			name: event.detail.name,
			status: 'backlog'
		})

		tasks = await getTasks()
	}

	const onDone = async (event) => {
		const db = firebase.firestore();

		// FIX: ここでドキュメントIDを取得するために通信してるが、もっと良い方法がありそう。
		const collection = await db.collection('tasks').where("id", "==", event.detail.id).get();
		const docId = collection.docs[0].id

		await db.collection("tasks").doc(docId).set({
			status: "done"
		}, { merge: true })
		
		tasks = await getTasks()
	}

	const getTasks = async () => {
		const db = firebase.firestore();

		const collection = await db.collection('tasks').get();
		return collection.docs.map( doc => doc.data())
	}

	onMount( async () => {
		tasks = await getTasks()
	})
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 3em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>