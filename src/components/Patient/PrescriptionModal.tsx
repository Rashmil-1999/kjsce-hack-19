import React from 'react';

import { useList, useToggle } from 'react-use';
import { useInput } from '../../util';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
  Button,
  Input,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Label,
  Row,
} from 'reactstrap';

type Medicine = {
  name: string,
  time: string,
};

type ExtraAddMedicineModalProps = {
  onAdd: (m: Medicine) => void, 
}

const MedicineBox: React.FC<Medicine & { onRemove: () => void }> = ({ name, time }) => (
  <ListGroupItem>{name} - {time}</ListGroupItem>
);

const AddMedicineModal: React.FC<ModalProps & ExtraAddMedicineModalProps> = (props) => {
  const onClick = () => {
    props.onAdd({
      name: (medicineInput.value as string),
      time: `${morning === true ? 1 : 0}${noon === true ? 1 : 0}${evening === true ? 1 : 0}`
    });
    if(props.toggle) {
      props.toggle();
    }
  };

  const medicineInput = useInput("-");
  
  const [morning, mToggle] = useToggle(false);
  const [noon, nToggle] = useToggle(false);
  const [evening, eToggle] = useToggle(false);
  
  return (
    <Modal {...props}>
      <ModalHeader>Add Medicine</ModalHeader>
      <ModalBody>
        <Label>Select medicine</Label>
        <Input type="select" {...medicineInput}>
          <option> - </option>
          <option>Hello</option>
          <option>world</option>
        </Input>
        <FormGroup check>
          <Row>
            <Label check>
              <Input type="checkbox" onClick={mToggle} />
              Morning
            </Label>
          </Row>
          <Row>
            <Label check>
              <Input type="checkbox" onClick={nToggle} />
              Noon
            </Label>
          </Row>
          <Row>
            <Label check>
              <Input type="checkbox" onClick={eToggle} />
              Evening
            </Label>
          </Row>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button disabled={!medicineInput.value || medicineInput.value === "-"} onClick={onClick}>Submit</Button>
      </ModalFooter>
    </Modal>
  );
};

const PrescriptionModal: React.FC<ModalProps> = (props) => {
  const [medicines, medActions] = useList<Medicine>([]);

  const [isAddModalOpen, toggle] = useToggle(false);

  const onAddClick = (e: any) => {
    e.preventDefault();
    toggle();
  };

  return (
    <Modal {...props}>
      <ModalHeader>
        Fill Prescription
      </ModalHeader>
      <ModalBody tag="form" className="d-flex flex-column" onSubmit={onAddClick}>
        <ListGroup>
          {medicines.map((m, i) => <MedicineBox {...m} onRemove={() => medActions.remove(i)} />)}
        </ListGroup>

        <Button type="submit" color="primary" className="my-2">+ Add Medicine</Button>
        <AddMedicineModal isOpen={isAddModalOpen} toggle={toggle} onAdd={(m: Medicine) => medActions.push(m)} />
      </ModalBody>
      <ModalFooter>
        <Button>Submit</Button>
      </ModalFooter>
    </Modal>
  );
};

export default PrescriptionModal;
