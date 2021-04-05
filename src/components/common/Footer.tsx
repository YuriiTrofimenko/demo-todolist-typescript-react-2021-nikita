/* const footer = () => <footer>Footer</footer>
export default footer */
interface IProps {
  companyName: string
}
const footer = (props: IProps) => <footer>&copy; {props.companyName}</footer>
export default footer