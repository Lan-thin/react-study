import React from 'react'
function getDisplayName(component){
    console.log(component.name)
    return component.displayName || component.name || 'compoenent'
}
// export default function withHeader(WrappedComponent) {
//     return class HOC extends React.PureComponent{
//         static displayName = `HOC(${getDisplayName(WrappedComponent)})`
//         render(){
//             return (
//                 <div>
//                     <div>高阶组件</div>
//                     <WrappedComponent {...this.props}/>
//                 </div>
//             )
//         }
//     }
// }
// export default function withHeader(title) {
//     return (WrappedComponent) => {
//         return class HOC extends React.PureComponent{
//             static displayName = `HOC(${getDisplayName(WrappedComponent)})`
//             render(){
//                 return (
//                     <div>
//                       {title? `标题${title}`: ''}
//                       <WrappedComponent {...this.props}/> 
//                     </div>
//                 )
//             }
//         }
//     }
// }
//  反向代理
export default (title)=> (WrappedComponent)=> class HOC extends WrappedComponent{
    componentWillMount() {
        console.log('will mount')
    }
    render(){
        return super.render()
    }
}