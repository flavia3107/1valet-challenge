import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Device } from 'src/assets/device-model';
import { DevicesComponent } from './devices.component';


const mockData: Device[] = [
  {
    device_id: 1,
    device_name: "Device 1",
    device_status: "Available",
    device_temperature: 10,
    device_type: "mobile",
    device_usage: [
      {
        africa: 0.4,
        asia: 2.1,
        europe: 2.5,
        latino_america: 1,
        middle_east: 0.8,
        north_america: 2.5,
        year: "2021"
      },
      {
        africa: 0.3,
        asia: 2.2,
        europe: 2.6,
        latino_america: 0.5,
        middle_east: 0.4,
        north_america: 2.7,
        year: "2022"
      }, {
        africa: 0.5,
        asia: 2.4,
        europe: 2.8,
        latino_america: 0.3,
        middle_east: 0.9,
        north_america: 2.9,
        year: "2023"
      }
    ]
  }, {
    device_id: 2,
    device_name: "Device 2",
    device_status: "Available",
    device_temperature: 14,
    device_type: "tablet",
    device_usage: [
      {
        africa: 0.2,
        asia: 2.4,
        europe: 3.5,
        latino_america: 1,
        middle_east: 0.4,
        north_america: 2.5,
        year: "2021",
      }, {
        africa: 0.31,
        asia: 2.23,
        europe: 12.6,
        latino_america: 0.25,
        middle_east: 0.42,
        north_america: 2.27,
        year: "2022",
      }, {
        africa: 0.45,
        asia: 2.43,
        europe: 2.18,
        latino_america: 1.3,
        middle_east: 0.93,
        north_america: 2.91,
        year: "2023"
      }
    ]
  }
];


describe('DevicesComponent', () => {
  let component: DevicesComponent;
  let fixture: ComponentFixture<DevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevicesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render the device list', () => {
    fixture.componentInstance.devicesList = mockData;
    fixture.detectChanges();
    const template = fixture.debugElement.nativeElement.children;
    const matListEl = template[0].children[1].children;
    expect(matListEl.length).toEqual(2);
    expect(matListEl[0].children[1].children[0].innerText).toEqual('Device 1');
    expect(matListEl[0].children[1].children[1].innerText).toEqual('Status: Available');
  });
});
