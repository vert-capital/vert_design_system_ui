import { IEvent } from '../types/calendar';
export default class DragAndDrop {
    static eventCanBeDraggedFurther(event: IEvent, direction: 'backwards' | 'forwards', dayStart: number, dayEnd: number): boolean;
}
