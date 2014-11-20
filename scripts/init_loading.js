batchFailedData = [
	{
		Batch: {name: '200000000015',
			numFailed: '40',
			contentSet: 'USCODE',
			date: '2014/09/07',
			vendor: 'Datastream'
		}
	},
	{
		Batch: {
			name: '200000000016',
			numFailed: '30',
			contentSet: 'USCODE',
			date: '2014/09/08',
			vendor: 'Datastream'
		}
	}
	,
	{
		Batch: {
			name: '200000000019',
			numFailed: '35',
			contentSet: 'USCODE',
			date: '2014/09/08',
			vendor: 'Datastream'
		}
	},
	{
		Batch: {
			name: '200000000020',
			numFailed: '20',
			contentSet: 'USCODE',
			date: '2014/09/09',
			vendor: 'Datastream'
		}
	},
		{
		Batch: {
			name: '200000000022',
			numFailed: '15',
			contentSet: 'USCODE',
			date: '2014/09/10',
			vendor: 'Datastream'
		}
	},
		{
		Batch: {
			name: '200000000016',
			numFailed: '40',
			contentSet: 'USCODE',
			date: '2014/09/11',
			vendor: 'Datastream'
		}
	},
		{
		Batch: {
			name: '200000000016',
			numFailed: '42',
			contentSet: 'USCODE',
			date: '2014/09/12',
			vendor: 'Datastream'
		}
	}
	];

for(var i = 0; i < batchFailedData.length; ++i) {
    db.batch_info.insert(batchFailedData[i].Batch);
}
//db.batch_info.insert({batch:'2000000786', num_failed:4, content_set:"BNA_TRE_BKRP", date:Date(), vendor:"BNA"});
