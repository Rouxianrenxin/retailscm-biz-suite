
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"活动的参与情况", menuFor: "eventAttendance",
  		subItems: [
  
  		],
}

const renderTextCell=(value, record)=>{

	if(!value){
		return '';
	}
	if(value==null){
		return '';
	}
	if(value.length>15){
		return value.substring(0,15)+"...("+value.length+"字)"
	}
	return value
	
}

const renderIdentifier=(value, record, targtObjectType)=>{

	return (<Link to={`/${targtObjectType}/${value}/dashboard`}>{value}</Link>)
	
}

const renderDateCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD');
}
const renderDateTimeCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD HH:mm');	
}

const renderImageCell=(value, record, title)=>{
	return (<ImagePreview imageTitle={title} imageLocation={value} />)	
}

const renderMoneyCell=(value, record)=>{
	if(!value){
		return '空'
	}
	if(value == null){
		return '空'
	}
	return (`￥${value.toFixed(2)}`)
}

const renderBooleanCell=(value, record)=>{

	return  (value? '是' : '否')

}

const renderReferenceCell=(value, record)=>{

	return (value ? value.displayName : '暂无') 

}

const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record)=>renderTextCell(text,record) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '13',render: (text, record)=>renderTextCell(text,record) },
  { title: '潜在的客户', dataIndex: 'potentialCustomer', render: (text, record) => renderReferenceCell(text, record)},
  { title: '城市活动', dataIndex: 'cityEvent', render: (text, record) => renderReferenceCell(text, record)},
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '13',render: (text, record)=>renderTextCell(text,record) },

]

const fieldLabels = {
  id: '序号',
  name: '名称',
  potentialCustomer: '潜在的客户',
  cityEvent: '城市活动',
  description: '描述',

}


const EventAttendanceBase={menuData,displayColumns,fieldLabels,displayColumns}
export default EventAttendanceBase



