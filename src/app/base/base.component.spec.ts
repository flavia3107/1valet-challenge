import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Device } from 'src/assets/device-model';

import { BaseComponent } from './base.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceService } from './device.service';
import { DevicesComponent } from './devices/devices.component';

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
]

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BaseComponent,
        DevicesComponent,
        DeviceDetailsComponent,
        BaseComponent
      ],
      imports: [
        HttpClientModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all data from api', () => {
    const deviceService = TestBed.inject(DeviceService);
    spyOn(deviceService, 'getData').and.returnValue(of(mockData));
    component.getData();
    expect(component.allDevices.length).toBe(2);
  });

  it('should render the template', () => {
    fixture.componentInstance.allDevices = mockData;
    fixture.detectChanges();
    const template = fixture.debugElement.nativeElement.children;
    expect(template[0].children.length).toEqual(2);
  });
});
