import { Worker } from 'bullmq';

const workerJob = new Worker('colors', async job => {
   return job.data
},{connection: {host: 'localhost', port:6379}});

export default workerJob